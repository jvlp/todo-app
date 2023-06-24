class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.boolean :finished
      t.datetime :finish_date
      t.integer :priority
      t.belongs_to :member, null: false, foreign_key: true

      t.timestamps
    end
  end
end
