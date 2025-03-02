# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

works = [
  {
    title: "Magnificat",
    subtitle: "BWV 243",
    composer: "JS Bach",
    notes: "Amo mucho",
  },
  {
    title: "La Maja Dolorosa #2",
    subtitle: "Ay, majo de mi vida",
    composer: "E Granados",
    notes:
      "Parte de la colección '12 Tonadillas en estilo antiguo' de Enrique Granados",
  },
  {
    title: "Il barbiere di Siviglia",
    subtitle: "ossia L'inutile precauzione",
    composer: "G Rossini",
    notes:
      "Gran obra para mezzosoprano, excelente ejemplo de una opera buffa con grandes exigencias de agilidad",
  },
]

works.each do |work|
  Work.create!(work)
end
