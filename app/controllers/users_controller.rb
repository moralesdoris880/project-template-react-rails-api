class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    skip_before_action :authorized, only: :create

    def create

    end

    private 

    def user_params
        params.permit(:username,:password,:password_confirmation,:email,:image_url,:verified)
    end

    def render_unprocessable_entity
        render json: {errors: ['Unproccessable Entity']}, status: :unprocessable_entity
    end
end
