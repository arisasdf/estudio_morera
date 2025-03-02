# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :work_create, mutation: Mutations::WorkCreate
  end
end
