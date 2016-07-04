<?php
defined('BASEPATH') OR exit('No direct script access allowed');

// Here we create our class model that for carrying databse opertions on our data_entry table
class Form_entry_model extends CI_Model {

  public function __construct() {
    // We call constructor method of the parent class (CI_Model)
    parent::__construct();
    // We load our database in the constructor to make our database available to the rest of the class
    $this->load->database();
  }

  public function create() {
    // Here we get the current post data from the clients request and store it in an array
    $data = array(
      'firstname' => $this->input->post('firstname'),
      'surname' => $this->input->post('surname'),
      'email' => $this->input->post('email'),
      'telephone' => $this->input->post('telephone'),
      'date_of_birth' => $this->input->post('dateofbirth'),
      'gender' => $this->input->post('gender'),
      'comments' => $this->input->post('comments'),
      'more_comments' => $this->input->post('morecomments')
    );
    // We then take data and pass it to CodeIgniter's query builder insert method in order to insert data into the
    // data_entry field
    return $this->db->insert('data_entry', $data);

  }

  public function get_users() {
    // Here we make a select query on the data_entry table
    $query = $this->db->get('data_entry');

    // We then return the data as array of records
    // Returns an array of objects on success or empty array on failure
    $data = $query->result();

    return $data;
  }
}
