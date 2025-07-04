package DevOps.CrudSpringBoot.services;


import java.util.List;

import org.springframework.stereotype.Service;

import DevOps.CrudSpringBoot.models.Customers;
import DevOps.CrudSpringBoot.repository.CustomersRepository;

@Service
public class Services {

    private CustomersRepository customersRepository;

    public Services(CustomersRepository customersRepository){
        this.customersRepository = customersRepository;
    }

    public void ajouter( Customers customers){  
        this.customersRepository.save(customers);
    }

    public List<Customers> listeCustomers(){
        return this.customersRepository.findAll();
    }

    public Customers getCustomers(int id){
        return this.customersRepository.findById(id);
    }

    public Customers updateCustomers(Customers customers2) {
       return this.customersRepository.save(customers2);
    }

    public void deleteCustomers(int id){
        this.customersRepository.deleteById(id);
    }
}
