# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts 'user destroying.....'
User.destroy_all
puts 'user creation....'
User.create!(email:"valentinlmr28@gmail.com", password:"azertyazerty", first_name:"Valentin", last_name:"Lemaire", age:18, description: "Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... " , status:'Worker', address:'6 rue des jonquilles', phone_number:'0620499062')
User.create!(email:"valentinlmr29@gmail.com", password:"azertyazerty", first_name:"George", last_name:"Mulliez", age:14, description: "Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... " , status:'Worker', address:'21 hameau du chateau', phone_number:'0620399062')
User.create!(email:"valentinlmr30@gmail.com", password:"azertyazerty", first_name:"Anna", last_name:"Mulliez", age:14, description: "Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... " , status:'Worker', address:'21 hameau du chateau', phone_number:'0620399062')
User.create!(email:"valentinlmr31@gmail.com", password:"azertyazerty", first_name:"Christophe", last_name:"Lemaire", age:16, description: "Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... " , status:'Worker', address:'6 rue des jonquilles', phone_number:'0620399062')
User.create!(email:"valentinlmr32@gmail.com", password:"azertyazerty", first_name:"Oscar", last_name:"Bogner", age:14, description: "Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... " , status:'Worker', address:'21 rue de la basse couture', phone_number:'0620399062')
User.create!(email:"valentinlmr33@gmail.com", password:"azertyazerty", first_name:"Anouck", last_name:"Lemaire", age:15, description: "Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... " , status:'Worker', address:'6 rue des jonquilles', phone_number:'0620399062')

puts 'service destroying.....'
Service.destroy_all
puts 'service creation.....'

Service.create!(name:'Babysitting', icon:'stroller.svg')
Service.create!(name:'AnimalKeeper', icon:'animal.svg')
Service.create!(name:'Gardening', icon:'mower.svg')
Service.create!(name:'Teaching', icon:'teaching.svg')

puts 'service destroying.....'
UserService.destroy_all
puts 'user_service creation......'
UserService.create!(user_id:2, service_id:1, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)
UserService.create!(user_id:2, service_id:2, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)
UserService.create!(user_id:2, service_id:3, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)
UserService.create!(user_id:2, service_id:4, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)

UserService.create!(user_id:3, service_id:2, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)
UserService.create!(user_id:3, service_id:4, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)
UserService.create!(user_id:3, service_id:3, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)

UserService.create!(user_id:4, service_id:2, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)
UserService.create!(user_id:4, service_id:4, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)
UserService.create!(user_id:4, service_id:1, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)

UserService.create!(user_id:5, service_id:2, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)
UserService.create!(user_id:5, service_id:3, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)
UserService.create!(user_id:5, service_id:4, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)
UserService.create!(user_id:5, service_id:1, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)

UserService.create!(user_id:6, service_id:4, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)
UserService.create!(user_id:6, service_id:1, description:"Je suis étudiante en première année de droit et je souhaite garder des enfants. J'aime beaucoup les enfants, les divertir. J'ai souvent gardée des cousins et cousines et cela s'est toujours très bien passé. Je suis d'une nature patiente,.... ", price:10)

puts'Availability destroying....'
Availability.destroy_all
puts'Availability creation ....'

Availability.create!(date: Date.today, start_time:'11.00', end_time:'12.00', user_id:2)
Availability.create!(date: Date.today, start_time:'11.00', end_time:'12.00', user_id:3)
Availability.create!(date: Date.today, start_time:'12.00', end_time:'13.00', user_id:4)
Availability.create!(date: Date.today, start_time:'12.00', end_time:'13.00', user_id:5)
Availability.create!(date: Date.today, start_time:'16.00', end_time:'18.00', user_id:6)
Availability.create!(date: Date.today, start_time:'16.00', end_time:'19.00', user_id:2)
Availability.create!(date: Date.today, start_time:'16.00', end_time:'18.00', user_id:3)
Availability.create!(date: Date.today, start_time:'17.00', end_time:'20.00', user_id:4)

puts'destoying reviews ...'
Review.destroy_all
puts 'reviews creation...'
Review.create!(user_id: 1, content: "John est le plus beau", rating: 5, user_service_id: 1)
Review.create!(user_id: 1, content: "super travail", rating: 5, user_service_id: 1)
Review.create!(user_id: 1, content: "les enfant l'ont adoré", rating: 5, user_service_id: 1)
Review.create!(user_id: 2, content: "Très serieux je recommande", rating: 5, user_service_id: 1)
Review.create!(user_id: 2, content: "John est le plus beau", rating: 5, user_service_id: 1)
Review.create!(user_id: 2, content: "super travail", rating: 5, user_service_id: 1)
Review.create!(user_id: 2, content: "les enfant l'ont adoré", rating: 5, user_service_id: 1)


