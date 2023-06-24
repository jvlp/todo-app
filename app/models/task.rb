class Task < ApplicationRecord
  belongs_to :member
  validates :finished, inclusion: [true, false]
  validates :priority, inclusion: [0, 1, 2]
  validates_presence_of :name
  validates_length_of :name, minimum: 5, maximum: 50
  validates_length_of :description, maximum: 150

  def get_finish_date
    self.finish_date ||= Time.current
  end
end
