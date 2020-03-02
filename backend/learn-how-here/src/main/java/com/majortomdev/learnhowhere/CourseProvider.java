package com.majortomdev.learnhowhere;
//by JoeK 02/03/20
import com.majortomdev.learnhowhere.entity.Course;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "course_provider")
//@Data can be known to be a little buggy when it comes to one2many and many2one relations....so....
@Getter
@Setter
public class CourseProvider {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "provider_name")
  private String provider_name;

  @OneToMany(cascade = CascadeType.ALL, mappedBy = "provider")
  private Set<Course> courses;


}
