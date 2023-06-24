class Task < ApplicationRecord
  belongs_to :member

  def get_finish_date
    self.finish_date ||= Time.current
  end
end
