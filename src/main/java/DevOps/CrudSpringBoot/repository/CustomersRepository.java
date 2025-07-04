package DevOps.CrudSpringBoot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import DevOps.CrudSpringBoot.models.Customers;

public interface CustomersRepository extends JpaRepository<Customers , Integer> {
    // void save()
    Customers findById(int id);
}
