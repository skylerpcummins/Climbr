class Photo < ActiveRecord::Base
  validates :title, :photo_url, :user_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "User"

    
end
