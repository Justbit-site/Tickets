FactoryGirl.define do
  factory :user do
    password "123456"
    sequence(:email){|n| "ddummy_#{n}@factory.com"}
  end
end
