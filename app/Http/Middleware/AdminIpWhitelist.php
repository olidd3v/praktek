<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminIpWhitelist
{
    public function handle(Request $request, Closure $next): Response
    {
        // gajadi dipake hehe
        return $next($request);
    }
}