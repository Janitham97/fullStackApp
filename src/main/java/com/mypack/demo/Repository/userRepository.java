package com.mypack.demo.Repository;

import com.mypack.demo.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository <User,Long> {

}
