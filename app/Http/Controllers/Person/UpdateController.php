<?php

namespace App\Http\Controllers\Person;

use App\Http\Requests\Person\StoreRequest;
use App\Http\Requests\Person\UpdateRequest;
use App\Models\Person;
use Illuminate\Routing\Controller as BaseController;

class UpdateController extends BaseController
{


    public function __invoke(UpdateRequest $request, Person $person)
    {
        $data = $request->validated();
        $person->update($data);
        return $person;
    }

}
