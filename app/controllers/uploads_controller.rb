require 'pry'

class UploadsController < ApplicationController
  def index
  end
  
  def upload
    binding.pry

    my_work = Work.find(params_work_id)

    my_score = Score.create(label: params_score_label, work: my_work)
    my_score.document.attach(params_score)

    render json: {
      name: my_work.title,
      attached: my_score.label,
      attached_url: rails_blob_path(my_score.document, disposition: "attachment")
    }
  end

  def download
  end

  private
  
  def params_work_id
    params.expect(:work_id)
  end

  def params_score
    params.expect(:score)
  end

  def params_score_label
    params.expect(:score_label)
  end
end
