require "test_helper"

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "renders the Inertia home page" do
    get root_path

    assert_response :success
    assert_includes response.body, "home/index"
  end
end
