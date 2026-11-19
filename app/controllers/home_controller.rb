class HomeController < InertiaController
  def index
    render inertia: {
      versions: {
        rails: Rails.version,
        ruby: RUBY_VERSION,
        inertia: InertiaRails::VERSION
      }
    }
  end
end
