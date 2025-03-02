require "test_helper"

class UploadsControllerTest < ActionDispatch::IntegrationTest
  test "should get upload" do
    get uploads_upload_url
    assert_response :success
  end

  test "should get download" do
    get uploads_download_url
    assert_response :success
  end
end
