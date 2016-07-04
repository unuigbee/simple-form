<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Form_entry extends CI_Controller {

  public function __construct() {
    parent::__construct();
    // We load our Form entry model from application/models/Form_entry_model.php
    $this->load->model('form_entry_model');
  }

  public function create() {
    // Note: We make no server side post/form validation here. However it's crucial that's it's done for security reasons
    // We make a call to our model's create method which returns true if successful and false if not
    $create_entry = $this->form_entry_model->create();

    // If create operation is succesful we set server response of set_content_type to 'application/json'
    // and set_status_header to 200 for an ok request
    // Else we respond with a error of 400 bad request
    if($create_entry) {
      $this->output->set_content_type('application/json');
      $this->output->set_status_header('200');
      // We then make a JSON response to the client with a key of reult and value of ok
      echo json_encode(array('result' => 'ok'));

    } else {
      $this->output->set_content_type('application/json');
      $this->output->set_status_header('400');

      // We then make a JSON response to the client with a key of result and value of error
      echo json_encode(array('result' => 'error'));
    }
  }

  public function get_users() {
    // A restful library would have been more appropriate but since we are handling a single resource
    // We'll omit it
    $data = $this->form_entry_model->get_users();
    $info = new stdClass();

    // If our returned data set is not empty we set status header to ok
    // We store our data within the info object and then JSON encode our information
    // Else we send back an error with a useful error message
    if (!empty($get_users)) {

      $this->output->set_content_type('application/json');
      $this->output->set_status_header('200');

      $info->users = $data;
      $json = json_encode($info);

      echo $json;

    } else {

        $this->output->set_content_type('application/json');
        $this->output->set_status_header('404');

        $info->status = 'failure';
        $info->error = new stdClass();
        $info->error->code = '44';
        $info->error->text = 'users resources does not exist';

        $json = json_encode($info);

        echo $json;
    }
  }
}
