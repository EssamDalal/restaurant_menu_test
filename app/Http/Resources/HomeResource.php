<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HomeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'have_discount' => $this->have_discount,
            'discount' => $this->discount,
            'parent_id' => $this->parent_id,
            'owner_id' => $this->user->name,
            // 'subCategory' => $this->subcategories,
        ];
    }
}
