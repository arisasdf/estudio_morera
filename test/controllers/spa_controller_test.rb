require "test_helper"

class SPAControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get spa_index_url
    assert_response :success
  end
end
