<?php
defined('BASEPATH') OR exit('No direct script access allowed');
// Setting up initial version of our migration for creating our form entry table
class Migration_Add_Form_data extends CI_Migration {
  // When we upgrade we create our form_entry table
  public function up() {
    $this->dbforge->add_field(array(
              'id' => array(
                      'type' => 'INT',
                      'constraint' => 11,
                      'unsigned' => TRUE,
                      'auto_increment' => TRUE
              ),
              'firstname' => array(
                      'type' => 'VARCHAR',
                      'constraint' => '255',
                      'default' => ''
              ),
              'surname' => array(
                      'type' => 'VARCHAR',
                      'constraint' => '255',
                      'default' => ''

              ),
              'email' => array(
                      'type' => 'VARCHAR',
                      'constraint' => '255',
                      'default' => ''
              ),
              'telephone' => array(
                      'type' => 'VARCHAR',
                      'constraint' => '50'
              ),
              'gender' => array(
                      'type' => 'VARCHAR',
                      'constraint' => '100',
                      'default' => ''
              ),
              'comments' => array(
                      'type' => 'TEXT',
                      'null' => TRUE,
              ),
              'more_comments' => array(
                      'type' => 'TEXT',
                      'null' => TRUE,
              )
    ));
    $this->dbforge->add_key('id', TRUE);
    $this->dbforge->create_table('data_entry');
  }
  // When we downgrade we drop our form_entry table
  public function down() {
    if ($this->dbforge->drop_database('data_entry')) {
        echo 'Database created!';
    }
  }
}
