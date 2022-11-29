<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->words(1, true),
            'have_discount' => $this->faker->boolean(),
            'discount' => $this->faker->numberBetween(1, 10),
            'owner_id' => 1,
            'parent_id' =>  $this->faker->numberBetween(1, 5),
            'description' => $this->faker->text(10),
        ];
    }
}
