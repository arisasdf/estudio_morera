# frozen_string_literal: true

module Types
  class WorkInputType < Types::BaseInputObject
    argument :id, ID, required: false # ???
    argument :title, String, required: true
    argument :subtitle, String, required: false
    argument :composer, String, required: true
    argument :notes, String, required: false
    argument :created_at, GraphQL::Types::ISO8601DateTime, required: false # ???
    argument :updated_at, GraphQL::Types::ISO8601DateTime, required: false # ???
  end
end
