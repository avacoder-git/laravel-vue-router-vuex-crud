<?php

namespace App\Http\Controllers\Person;

use App\Http\Requests\Person\StoreRequest;
use App\Models\Person;
use Illuminate\Routing\Controller as BaseController;

class IndexController extends BaseController
{


    public function __invoke()
    {
        $people = Person::all();
        return $people;
    }

}
