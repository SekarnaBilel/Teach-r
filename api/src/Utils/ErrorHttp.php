<?php


namespace App\Utils;

class ErrorHttp
{
    public const ERROR = ['message' => 'error', 'code' => 500];
    public const FORM_ERROR = ['message' => 'form invalid', 'code' => 400];
}