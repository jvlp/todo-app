class Api::V1::MembersController < ApplicationController
  before_action :set_member, only: %i[ show update destroy ]

  # GET /members
  def index
    @members = Member.all

    render json: @members
  end

  # GET /members/id
  def show
    render json: @member
  end

  # POST /members/
  def create
    @member = Member.new(member_params)

    if @member.valid?
      @member.save
      token = encode_token({ member_id: @member.id })
      render json: {member: @member, token: token}, status: :created
    else
      render json: @member.errors, status: :unprocessable_entity
    end
  end

  def login
    member = Member.find_by(email: member_params[:email])

    if member && member.authenticate(member_params[:password])
        token = encode_token({ member_id: member.id })
        render json: { member: member, token: token }, status: :ok
    else
    render json: {message: "Unauthorized"}, status: :unauthorized
  end
end

  # PATCH/PUT /members/id
  def update
    if @member.update(member_params)
      render json: @member
    else
      render json: @member.errors, status: :unprocessable_entity
    end
  end

  # DELETE /members/id
  def destroy
    @member.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_member
      @member = Member.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def member_params
      params.permit(:email, :name, :password, :password_confirmation)
    end
end
