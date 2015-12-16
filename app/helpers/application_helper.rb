module ApplicationHelper

  def auth_token
    "<input type='hidden' name='authenticity_token' value='#{form_authenticity_token}'>".html_safe
  end

  def error_helper
    if flash[:errors]
      html="<ul class=\'user-errors\'>"
      flash[:errors].each do |error|
        html+= "<li>#{error}</li>"
      end
      html += "</ul>"
      html.html_safe
    end
  end

end
