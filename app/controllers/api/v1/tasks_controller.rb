class Api::V1::TasksController < ApplicationController
  before_action :authorize
  before_action :set_task, only: %i[ show update destroy ]

  # GET /tasks
  def index
    puts params
    if params[:pageSize].present? && params[:pageNumber].present?
      @tasks = Task.limit(params[:pageSize].to_i).offset(params[:pageNumber].to_i * params[:pageSize].to_i)
    else
      @tasks = Task.all
    end
    
    render json: @tasks
  end

  # GET /tasks/1
  def show
    render json: @task
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)

    if @task.save
      render json: @task, status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update

    if !@task.finished && params[:finished]
      @task.get_finish_date
    end

    if @task.finished && !params[:finished]
      @task.update_attribute(:finish_date, nil)
    end
    
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:name, :description, :finished, :finish_date, :priority, :member_id)
    end
end
