class Score < ApplicationRecord
  belongs_to :work
  has_one_attached :document
end
