package DevOps.CrudSpringBoot.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import DevOps.CrudSpringBoot.models.Customers;
import DevOps.CrudSpringBoot.services.Services;
import jakarta.websocket.server.PathParam;

@RestController
@CrossOrigin
@RequestMapping(path = "clients")
public class Controllers {

    private Services services;

    public Controllers(Services services){
        this.services = services;
    }

    @PostMapping(consumes = "application/json")
    public Customers ajouter( @RequestBody Customers customers){
        this.services.ajouter(customers);
        return customers;
    }

    @GetMapping(path="listeCustomers")
    public List<Customers> lister(){
        return this.services.listeCustomers();
    }

    @GetMapping(path="getCustomers/{id}")
    public  Customers getCustomers(@PathVariable int id){
        return this.services.getCustomers(id);
    }

    @PutMapping(path="updateCustomers/{id}")
    public Customers updateCustomers(@PathVariable int id,@RequestBody Customers customers){
        Customers customers2 = customers;
        customers2.id = id;
        return this.services.updateCustomers(customers2);
    }

    @DeleteMapping(path="deleteCustomers/{id}")
    public String deletrCustomers(@PathVariable int id){
        this.services.deleteCustomers(id);
        return "supprimer avec succes";
    }
}
