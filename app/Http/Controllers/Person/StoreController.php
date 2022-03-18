<?php

namespace App\Http\Controllers\Person;

use App\Http\Requests\Person\StoreRequest;
use App\Models\Person;
use Illuminate\Routing\Controller as BaseController;

class StoreController extends BaseController
{


    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $person  = Person::create($data);
        return $person;
    }

}
