# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


5.times do |i|
    Member.create(
        name: "Jogn Doe #{i}",
        email: "john#{i}@doe.com",
        password: "password",
        password_confirmation: "password"
    )
end

500.times do |i|
    Task.create(
        name: "task#{i}",
        description: "desc desc desc desc desc desc desc desc desc desc desc desc desc desc",
        finished: false,
        priority: i%3,
        member_id: i%5 + 1
    )
end