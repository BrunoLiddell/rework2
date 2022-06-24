<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VisiteurController extends AbstractController
{
    #[Route('/', name: 'accueil_candidats')]
    public function index(): Response
    {
        return $this->render('visiteur/candidats.html.twig');
    }

    #[Route('/recruteur', name: 'accueil_recruteurs')]
    public function deux(): Response
    {
        return $this->render('visiteur/recruteurs.html.twig');
    }
}
