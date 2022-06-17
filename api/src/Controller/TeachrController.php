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
        if (!isset($data->prenom,$data->formation,$data->description))
            return $this->globals->error(error: ErrorHttp::FORM_ERROR);

        $teachrs = new Teachr();
        $teachrs->setPrenom($data->prenom)
               ->setFormation($data->formation)
               ->setDescription($data->description);

        $this->teachrRepository()->getMannager()->persist($teachrs);
        $this->getDoctrine()->getMannager()->flush();
        return $this->globals->success($teachrs->toArray());
    }
}
