class Area < ActiveRecord::Base
  validates :name, :description, :lat, :lng, presence: true

  has_many :photos,
    foreign_key: :area_id,
    primary_key: :id,
    class_name: "Photo"
end
