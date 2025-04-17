<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index(Request $request)
    {
        $query = Movie::query();

        if ($request->has('platform')) {
            $query->where('platform', $request->platform);
        }

        if ($request->has('seen')) {
            $query->where('seen', $request->seen);
        }

        return response()->json($query->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'platform' => 'required|string',
            'seen' => 'boolean',
            'rating' => 'nullable|integer',
            'comment' => 'nullable|string',
        ]);

        $movie = Movie::create($data);

        return response()->json($movie, 201);
    }

    public function show(Movie $movie)
    {
        return response()->json($movie);
    }

    public function update(Request $request, Movie $movie)
    {
        $data = $request->validate([
            'title' => 'string',
            'platform' => 'string',
            'seen' => 'boolean',
            'rating' => 'nullable|integer',
            'comment' => 'nullable|string',
        ]);

        $movie->update($data);

        return response()->json($movie);
    }

    public function destroy(Movie $movie)
    {
        $movie->delete();
        return response()->json(['message' => 'Movie deleted']);
    }
}

