<?php

namespace App\Controller;

use App\Utils\Globals;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{

    private Globals $globals;
    public function __construct(Globals $globals)
    {
        $this->globals = $globals;
    }
    #[Route('/', name: 'app_default')]
    public function home(): JsonResponse
    {
        return $this->globals->success([
            'message' => "Bienvenue sur l'API de Bilel ",
        ]);
    }
}
