<?php
namespace App\Resource;

use App\AbstractResource;
use Clue;

class ClueResource extends AbstractResource
{
	public function get($id)
    {
        if ($id === null) {
            $users = $this->getEntityManager()->getRepository('clue')->findAll();
            $users = array_map(function($user) {
                return $this->convertToArray($user); },
                $users);
            $data = json_encode($users);
        } else {
            $data = $this->convertToArray($this->getEntityManager()->find('clue', $id));
        }

        // @TODO handle correct status when no data is found...

        return json_encode($data);
    }
}
?>