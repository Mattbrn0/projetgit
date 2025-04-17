<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie; // <- Important !

class TopMovieController extends Controller
{
    public function index()
    {
        $movies = Movie::where('rating', '>', 0)
                        ->orderBy('rating', 'desc')->take(100)->get();
        return response()->json($movies);
    }
}

