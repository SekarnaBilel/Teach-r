<?php

namespace App\Utils;

use Symfony\Component\HttpFoundation\JsonResponse;
use App\Utils\Exception;

class Globals
{
    public function success(array $data = null, $message = "success", int $codeHttp = 200): JsonResponse
    {
        return new JsonResponse([
            'status' => 200,
            'message' => $message,
            'data' => $data
        ], $codeHttp);
    }

    public function error(array $error = ErrorHttp::ERROR): JsonResponse
    {
        return new JsonResponse([
            'status' => 400,
            'message' => $error['message'] ?? 'error',
        ], $error['code'] ?? 500);
    }
    
    public function json_decode()
    {
        try{
            return file_get_contents( filename: 'php://input') ? 
            json_decode(file_get_contents(filename:'php://input'), associative:false) : [];
        }catch( Exception $e){
            return [];
        }
    }
}
