<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Utils\Globals;
use App\Repository\TeachrRepository;
use App\Entity\Teachr;

class TeachrController extends AbstractController
{

    private Globals $globals;
    private TeachrRepository $teachrRepository;
    public function __construct(Globals $globals, TeachrRepository $TeachrRepository)
    {
        $this->globals = $globals;
        $this->teachrRepository = $TeachrRepository;
    }

    #[Route('/teachr', name: 'app_teachr')]
    public function teachr(): JsonResponse
    {
        return $this->globals->success([
            'teachr' => array_map(function(Teachr $teachr){
                return $teachr->toArray();
            },$this->teachrRepository->findAll())
        ]);
    }
}
