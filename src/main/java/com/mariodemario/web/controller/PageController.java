package com.mariodemario.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Controller de páginas (views Thymeleaf). Os dados que hoje estão fixos
 * no dashboard.html (vendas do dia, alertas de estoque, etc.) devem
 * futuramente vir de um Model preenchido aqui, chamando os Services
 * correspondentes (ex.: dashboardService.obterResumo()).
 */
@Controller
public class PageController {

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping({"/", "/dashboard"})
    public String dashboard() {
        return "dashboard";
    }
}
