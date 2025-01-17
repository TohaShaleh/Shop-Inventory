package com.shop.inventory.service;

import com.shop.inventory.model.Item;
import com.shop.inventory.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

// This represents the service layer in a Spring Boot application.
// The ItemService class contains the business logic for managing items.
// It acts as a bridge between the controller (which handles HTTP requests)
// and the repository (which interacts with the database).


@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Item addItem(Item item) {
        return itemRepository.save(item);
    }

    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }

    public Item updateItem(Long id, Item updatedItem) {
        return itemRepository.findById(id).map(item -> {
            item.setName(updatedItem.getName());
            item.setQuantity(updatedItem.getQuantity());
            item.setPrice(updatedItem.getPrice());
            item.setDescription(updatedItem.getDescription());
            return itemRepository.save(item);
        }).orElseThrow(() -> new RuntimeException("Item not found!"));
    }


    public List<Item> searchItems(String name) {
        return itemRepository.findByNameContainingIgnoreCase(name);
    }


}
