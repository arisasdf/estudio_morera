# frozen_string_literal: true

module Types
  class WorkType < Types::BaseObject
    field :id, ID, null: false
    field :title, String
    field :subtitle, String
    field :composer, String
    field :notes, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
