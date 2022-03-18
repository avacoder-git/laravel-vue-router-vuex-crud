<?php

namespace App\Http\Controllers\Person;

use App\Http\Requests\Person\StoreRequest;
use App\Http\Requests\Person\UpdateRequest;
use App\Models\Person;
use Illuminate\Routing\Controller as BaseController;

class DeleteController extends BaseController
{


    public function __invoke(Person $person)
    {
        $person->delete();
        return response(['success']);
    }

}
