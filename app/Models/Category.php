<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'have_discount', 'discount', 'owner_id', 'parent_id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
    public function items()
    {
        return $this->hasMany(Item::class, 'parent_id');
    }
    public function parent()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }
    public function subcategories()
    {
        return $this->hasMany(self::class, 'parent_id');
    }
    public function nLevelSubcategories()
    {
        return $this->hasMany(self::class, 'parent_id')->with('nLevelSubcategories');
    }
    // public function getAllCatefory()
    // {
    //     if (count($this->nLevelSubcategories) != 0) {
    //         $allCat = $this->nLevelSubcategories;
    //         return $allCat;
    //     } else {
    //         return $this->getAllCatefory();
    //     }
    // }

    protected function canHaveChildren(): Attribute
    {
        return Attribute::make(
            get: fn () => !(bool) $this?->parent?->parent?->parent,
        );
    }
}
