class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string      :name
      t.string      :surname
      t.string      :lastname
      t.references  :user
      
      t.timestamps
    end
  end

end
