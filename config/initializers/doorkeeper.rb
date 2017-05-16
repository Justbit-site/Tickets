
Doorkeeper.configure do
  Devise::Doorkeeper.configure_doorkeeper(self)
  orm :active_record

  resource_owner_authenticator do |routes|
    current_user || warden.authenticate!(:scope => :user)
  end

  use_refresh_token
end
