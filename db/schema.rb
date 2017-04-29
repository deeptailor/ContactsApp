# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170428235424) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contacts", force: :cascade do |t|
    t.string   "firstname",         null: false
    t.string   "lastname"
    t.string   "profile_image_url"
    t.integer  "number",            null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["firstname"], name: "index_contacts_on_firstname", unique: true, using: :btree
  end

  create_table "group_contacts", force: :cascade do |t|
    t.integer  "contact_id", null: false
    t.integer  "group_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contact_id"], name: "index_group_contacts_on_contact_id", using: :btree
    t.index ["group_id"], name: "index_group_contacts_on_group_id", using: :btree
  end

  create_table "groups", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_groups_on_name", using: :btree
  end

end
