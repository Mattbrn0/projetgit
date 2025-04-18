<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class TopMovieController extends Controller
{
    public function index()
    {
        $movies = Movie::whereNotNull('rating')
                       ->orderBy('rating', 'desc')
                       ->take(100)
                       ->get();

        return response()->json($movies);
    }
}

