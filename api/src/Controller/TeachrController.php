<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Utils\Globals;
use App\Repository\TeachrRepository;
use App\Entity\Teachr;
use App\Controller\ErrorHttp;

class TeachrController extends AbstractController
{

    private Globals $globals;
    private TeachrRepository $teachrRepository;
    public function __construct(Globals $globals, TeachrRepository $TeachrRepository)
    {
        $this->globals = $globals;
        $this->teachrRepository = $TeachrRepository;
    }


    
    public function teachr(): JsonResponse
    {
        return $this->globals->success([
            'teachrs' => array_map(function (Teachr $teachr) {
                return $teachr->toArray();
            }, $this->teachrRepository->findAll())
        ]);
    }


    
    public function save(): JsonResponse
    {
        $data = $this->globals->json_decode();
        if (!isset($data->prenom))
            return $this->globals->error(error: ErrorHttp::FORM_ERROR);

        $teachr = new Teachr();
        $teachr->setPrenom($data->prenom);

        $this->getDoctrine()->getMannager()->persist($teachr);
        $this->getDoctrine()->getMannager()->flush();
        return $this->globals->success($teachr->toArray());
    }
}
